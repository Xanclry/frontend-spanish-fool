import SockJS from 'sockjs-client'
import StompJs from 'stompjs'
import { useEffect, useState } from 'react'
import produce from 'immer'

let socket = new SockJS('http://localhost:8080/chat')
let client = StompJs.over(socket)
// let client = StompJs.client('ws://localhost:8080/websocket')
//

interface Greeting {
  message: string
}
interface Message {
  name: string
}

export const GreetingDemo = () => {
  const [greetings, setGreetings] = useState<Greeting[]>([])
  const [nameToSend, setNameToSend] = useState<string>('')

  useEffect(() => {
    client.connect(
      {},
      () => {
        console.log('connected')
      },
      error => {
        console.log(error)
      }
    )

    return () => {
      client.disconnect(() => {
        console.log('disconnected')
      })
    }
  }, [])

  const subscribe = () => {
    client.subscribe('/topic/messages', message => {
      console.log('get ', message)
      setGreetings(prevState =>
        produce(prevState, (draft: Greeting[]) => {
          draft.push(JSON.parse(message.body))
        })
      )
    })
  }

  const sendMessage = () => {
    client.send('/app/chat', {}, JSON.stringify({ name: nameToSend }))
  }

  // const unsubscribe = () => {
  //   client.unsubscribe('http://localhost:8080/topic/greetings', greeting => {
  //     console.log('get ', greeting)
  //     // setGreetings(prevState => produce(prevState, (draft: Greeting[]) => {
  //     //   // draft.push(greeting)
  //     // }))
  //   })
  // }

  return (
    <div>
      <button onClick={subscribe}>Подписаться</button>
      <br />
      <input value={nameToSend} onChange={input => setNameToSend(input.target.value)} />
      <button onClick={sendMessage}>Отправить</button>
      <br />
      {greetings &&
        greetings.map(greeting => {
          return <p key={greeting.message}>{greeting.message}</p>
        })}
    </div>
  )
}
