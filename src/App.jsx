// // import { useState } from "react";
// // import "./App.css";
// // import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

// // import {
// //   MainContainer,
// //   ChatContainer,
// //   MessageList,
// //   Message,
// //   MessageInput,
// //   TypingIndicator,
// // } from "@chatscope/chat-ui-kit-react";

// // function App() {

// // const [typing , settyping]=useState(false);
// // const [messages , setMessages]=useState([
// //   {
// //     message: "hello , i am Aren",
// //     sender:"Aren (ChatGPT)"
// //   }
// // ]);

// // const handleSend= async(message)=>{
// //   const newMessage={
// //     message:message,
// //     sender:"User"
// //   }
// // }

// // const newMessages=[...messages, newMessage]
// // //Update our messges state

// // // proceess messgae to chapgpt (send it iver and see the response )

// // settyping(true);

// //   return (
// //     <div className="App">
// //       <div style={{ position:"relative", height: "800px", width: "700px"  }}>
// //         <MainContainer>
// //           <ChatContainer>
// //             <MessageList
// //               // scrollBehavior="smooth"
// //               // typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
// //             >
// //               {messages.map((message, i) => {
// //                 console.log(message)
// //                 return <Message key={i} model={message} />
// //               })}
// //             </MessageList>
// //             <MessageInput placeholder="Type message here" onSend={handleSend} />
// //           </ChatContainer>
// //         </MainContainer>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

// import { useState } from "react";
// import "./App.css";
// import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

// import {
//   MainContainer,
//   ChatContainer,
//   MessageList,
//   Message,
//   MessageInput,
//   TypingIndicator,
// } from "@chatscope/chat-ui-kit-react";

// const API_KEY =
//   "";

//   // "Explain things like you would to a 10 year old learning how to code."
// const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
//   "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
// }
// function App() {
//   const [typing, settyping] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       message: "hello , i am Aren",
//       sender: "Aren (ChatGPT)",
//       direction: "incoming",
//       // position: "single",
//     },
//   ]);

//   const handleSend = async (message) => {
//     const newMessage = {
//       message: message,
//       sender: "User",
//       direction: "outgoing",
//       // position: "single",
//     };

//     const newMessages = [...messages, newMessage];

//     // Update our messages state
//     setMessages(newMessages);

//     // set a typing indicator (chat gpt id typing )

//     settyping(true);

//     // process message to chatgpt (send it over and see the response)
//     await processMessageToChatGPT(newMessages);
//   };

//   async function processMessageToChatGPT(chatMessages) {
//     // messages is an array of messages
//     // Format messages for chatGPT API
//     // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
//     // So we need to reformat

//     let apiMessages = chatMessages.map((messageObject) => {
//       let role = "";
//       if (messageObject.sender === "ChatGPT") {
//         role = "assistant";
//       } else {
//         role = "user";
//       }
//       return { role: role, content: messageObject.message };
//     });

//     // Get the request body set up with the model we plan to use
//     // and the messages which we formatted above. We add a system message in the front to'
//     // determine how we want chatGPT to act.
//     const apiRequestBody = {
//       model: "gpt-3.5-turbo",
//       messages: [
//         systemMessage, // The system message DEFINES the logic of our chatGPT
//         ...apiMessages, // The messages from our chat with ChatGPT
//       ],
//     };

//     await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         Authorization: "Bearer " + API_KEY,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(apiRequestBody),
//     })
//       .then((data) => {
//         return data.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setMessages([
//           ...chatMessages,
//           {
//             message: data.choices[0].message.content,
//             sender: "ChatGPT",
//           },
//         ]);
//         settyping(false);
//       });
//   }

//   return (
//     <div className="App">
//       <div style={{ position: "relative", height: "400px", width: "500px" }}>
//         <MainContainer>
//           <ChatContainer>
//             <MessageList
//               scrollBehavior="smooth"
//               typingIndicator={
//                 typing ? <TypingIndicator content="Aren is typing" /> : null
//               }
//             >
//               {messages.map((message, i) => {
//                 console.log(message);
//                 return <Message key={i} model={message} />;
//               })}
//             </MessageList>
//             <MessageInput placeholder="Type message here" onSend={handleSend} />
//           </ChatContainer>
//         </MainContainer>
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useState } from 'react'
// import './App.css'
// import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
// import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

// // const API_KEY = "";

// const API_KEY=
// // "Explain things like you would to a 10 year old learning how to code."
// const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
//   "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience. and also you are a teacher "
// }

// function App() {
//   const [messages, setMessages] = useState([
//     {
//       message: "Hello, I'm Aren! You can Ask me anything!",
//       sentTime: "just now",
//       sender: "ChatGPT"
//     }
//   ]);
//   const [isTyping, setIsTyping] = useState(false);

//   const handleSend = async (message) => {
//     const newMessage = {
//       message,
//       direction: 'outgoing',
//       sender: "user"
//     };

//     const newMessages = [...messages, newMessage];

//     setMessages(newMessages);

//     // Initial system message to determine ChatGPT functionality
//     // How it responds, how it talks, etc.
//     setIsTyping(true);
//     await processMessageToChatGPT(newMessages);
//     console.log(model);
//   };
//   async function processMessageToGemini(chatMessages) {
//     // Reformat messages for Gemini API
//     let parts = chatMessages.map((messageObject) => {
//       return { text: `${messageObject.sender}: ${messageObject.message}` };
//     });

//     const apiRequestBody = {
//       contents: [
//         {
//           role: "user",
//           parts: parts
//         }
//       ]
//     };

//     await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyD941bGRhEQXke3q2aPzKoIRe6leMCtXBE", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(apiRequestBody)
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         const geminiReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Gemini.";
//         setMessages([
//           ...chatMessages,
//           {
//             message: geminiReply,
//             sender: "ChatGPT" // You can still call it ChatGPT or Gemini here
//           }
//         ]);
//         setIsTyping(false);
//       })
//       .catch((err) => {
//         console.error("Error from Gemini:", err);
//         setIsTyping(false);
//       });
//   }

//   return (
//     <div className="App">
//       <div style={{ position:"relative", height: "500px", width: "500px"  }}>
//         <MainContainer>
//           <ChatContainer>
//             <MessageList
//               scrollBehavior="smooth"
//               typingIndicator={isTyping ? <TypingIndicator content="Aren is typing" /> : null}
//             >
//               {messages.map((message, i) => {
//                 console.log(message)
//                 return <Message key={i} model={message} />
//               })}
//             </MessageList>
//             <MessageInput placeholder="Type message here" onSend={handleSend} />
//           </ChatContainer>
//         </MainContainer>
//       </div>
//     </div>
//   )
// }

// export default App

// import { useState } from "react";
// import "./App.css";
// import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
// import {
//   MainContainer,
//   ChatContainer,
//   MessageList,
//   Message,
//   MessageInput,
//   TypingIndicator,
// } from "@chatscope/chat-ui-kit-react";

// // Gemini API key
// const API_KEY = "";

// function App() {
//   const [messages, setMessages] = useState([
//     {
//       message: "Hello, I'm Aren! You can ask me anything!",
//       sentTime: "just now",
//       sender: "ChatGPT",
//     },
//   ]);
//   const [isTyping, setIsTyping] = useState(false);

//   const handleSend = async (message) => {
//     const newMessage = {
//       message,
//       direction: "outgoing",
//       sender: "user",
//     };

//     const newMessages = [...messages, newMessage];
//     setMessages(newMessages);
//     setIsTyping(true);
//     await processMessageToGemini(newMessages);
//   };

//   async function processMessageToGemini(chatMessages) {
//     // Create Gemini-formatted parts from user messages
//     const parts = chatMessages.map((msg) => {
//       return {
//         role: msg.sender === "user" ? "user" : "model",
//         parts: [{ text: msg.message }],
//       };
//     });

//     const requestBody = {
//       contents: parts,
//     };

//     await fetch(
//       `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(requestBody),
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         const geminiReply =
//           data.candidates?.[0]?.content?.parts?.[0]?.text ||
//           "No response from Gemini.";
//         setMessages([
//           ...chatMessages,
//           {
//             message: geminiReply,
//             sender: "Gemini",
//           },
//         ]);
//         setIsTyping(false);
//       })
//       .catch((err) => {
//         console.error("Error from Gemini:", err);
//         setIsTyping(false);
//       });
//   }

//   // Styling based on sender
//   const getMessageStyle = (sender) => {
//     return {
//       // backgroundColor: sender === "user" ? "#8eb7ff" : "#a0522d",
//       backgroundColor: sender === "user" ? "#eb9e25" : "#8eb7ff",
      
      
//       color: "#fff",
//       padding: "10px 14px",
//       borderRadius: "16px",
//       maxWidth: "80%",
//     };
//   };


//   return (
//     <div className="App">
//       <div style={{ position: "relative", height: "500px", width: "500px" }}>
//         <MainContainer>
//           <ChatContainer>
//             {/* <MessageList
//               scrollBehavior="smooth"
//               typingIndicator={
//                 isTyping ? (
//                   <TypingIndicator content="Aren is typing..." />
//                 ) : null
//               }
//             > */}
//             {/* {messages.map((message, i) => {
                
//                 return <Message key={i} model={message} />
//               })} */}
//             <MessageList
//               scrollBehavior="smooth"
//               typingIndicator={
//                 isTyping ? <TypingIndicator content="Aren is typing" /> : null
//               }
//             >
//               {messages.map((message, i) => (
//                 <Message
//                   key={i}
//                   model={{
//                     message: message.message,
//                     sentTime: message.sentTime,
//                     sender: message.sender,
//                     direction:
//                       message.sender === "user" ? "outgoing" : "incoming",
//                   }}
//                 >
//                   <div style={getMessageStyle(message.sender)}>
//                     {message.message}
//                   </div>
//                 </Message>
//               ))}
//             </MessageList>
//             {/* </MessageList> */}
//             <MessageInput placeholder="Type message here" onSend={handleSend} />
//           </ChatContainer>
//         </MainContainer>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";


const API_KEY = import.meta.env.VITE_SOME_KEY;
// const API_KEY = "A";

function App() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Aren! You can ask me anything!",
      sentTime: "just now",
      sender: "Gemini",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setIsTyping(true);
    await processMessageToGemini(newMessages);
  };

  async function processMessageToGemini(chatMessages) {
    const parts = chatMessages.map((msg) => {
      return {
        role: msg.sender === "user" ? "user" : "model",
        parts: [{ text: msg.message }],
      };
    });

    const requestBody = {
      contents: parts,
    };

    await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const geminiReply =
          data.candidates?.[0]?.content?.parts?.[0]?.text ||
          "No response from Gemini.";
        setMessages([
          ...chatMessages,
          {
            message: geminiReply,
            sender: "Gemini",
          },
        ]);
        setIsTyping(false);
      })
      .catch((err) => {
        console.error("Error from Gemini:", err);
        setIsTyping(false);
      });
  }

  // Styling based on sender
  const getMessageStyle = (sender) => {
    return {
      // backgroundColor: sender === "user" ? "#8eb7ff" : "#a0522d",
      // backgroundColor: sender === "user" ? "#eb9e25" : "#8eb7ff",
      // color: "#fff",
      // padding: "10px 14px",
      // borderRadius: "16px",
      // maxWidth: "80%",
      // whiteSpace: "pre-wrap",
    };
  };

  return (
    <div className="App">
      <div style={{ position: "relative", height: "500px", width: "500px" }}>
        <MainContainer>
          <ChatContainer>
            {/* <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? (
                  <TypingIndicator content="Aren is typing..." />
                ) : null
              }
            > */}
            {/* {messages.map((message, i) => {
                return <Message key={i} model={message} />
              })} */}
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? <TypingIndicator content="Aren is typing" /> : null
              }
            >
              {messages.map((message, i) => (
                <Message
                  key={i}
                  model={{
                    message: message.message,
                    sentTime: message.sentTime,
                    sender: message.sender,
                    direction:
                      message.sender === "user" ? "outgoing" : "incoming",
                  }}
                />
              ))}
            </MessageList>
            {/* </MessageList> */}
            <MessageInput
              placeholder="Type message here"
              onSend={handleSend}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;

