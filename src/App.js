// import {useEffect, useState} from 'react'
// import axios from 'axios';
// function App() {

//   const [pokemons, setPokemons] = useState([])

//   // useEffect( () =>{
//   //   fetch('https://pokeapi.co/api/v2/pokemon')
//   //   .then(response => response.json())
//   //   .then(
//   //     data => setPokemons(data.results)
//   //   )
//   // }, [] )

//   useEffect(() => {
//     axios.get('https://pokeapi.co/api/v2/pokemon')
//       .then(res => {
//         // Assuming setPokemons is a state updater function
//         setPokemons(res.results);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []);
  

//   return (
//     <>
//       <h1>Pokemons</h1>
//       <ul>
//             {
//               pokemons.map( (pokemon, index) =>{
//                 return <li>{pokemon.name}</li>
//               } )
//             }
            
//           </ul>
      
//     </>
//   );
// }

// export default App;



// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [pokemons, setPokemons] = useState([]);

//   useEffect(() => {
//     axios.get('https://pokeapi.co/api/v2/pokemon')
//       .then(res => {
//         // Corrected access to the results property
//         setPokemons(res.data.results);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <>
//       <h1>Pokemons</h1>
//       <ul>
//         {
//           pokemons.map((pokemon, index) => {
//             return <li key={index}>{pokemon.name}</li>;
//           })
//         }
//       </ul>
//     </>
//   );
// }

// export default App;

// export default function Search() {
//   function search(event) {
//     event.preventDefault(); // Prevents the default form submission behavior
//     const formData = new FormData(event.target);
//     const query = formData.get("query");
//     alert(`You searched for '${query}'`);
//   }

//   return (
//     <form onSubmit={search}>
//       <input name="query" />
//       <button type="submit">Search</button>
//     </form>
//   );
// }


import {Alert, Button, Form, Input, Spin} from "antd";
import axios from "axios";
import {useState} from "react";
function App() {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const onFinish = (data) => {
        setIsSubmitting(true);
        console.log(data);
        // submit to api

        axios.post(
            'https://eohbu9wb3wmiat8.m.pipedream.net',
            data
        )
            .then((response) => {
                console.warn(response)
                setIsSubmitting(false);

            })
    }

    return (
        <>
            <h1>Form</h1>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="First Name"
                    name="first_name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your First Name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Last Name"
                    name="last_name"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Spin spinning={isSubmitting}>
                    </Spin>
                </Form.Item>
            </Form>
        </>
    );
}

export default App;