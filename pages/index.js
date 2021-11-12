import Head from 'next/head';
import Form from "../components/Form";
import {NewCommit} from "../components/NewCommit";
import {useState} from "react";

const name = ["Allen", "Bob", "Carlton",
  "David", "Ernie", "Foster",
  "George", "Howard", "Ian",
  "Jeffery", "Kenneth", "Lawrence",
  "Michael", "Nathen", "Orson",
  "Peter", "Quinten", "Reginald",
  "Stephen", "Thomas", "Morris",
  "Victor", "Walter", "Xavier",
  "Charles", "Anthony", "Gordon",
  "Percy", "Conrad", "Quincey",
  "Armand", "Jamal", "Andrew",
  "Matthew", "Mark", "Gerald", "Alice", "Bonnie", "Cassie",
  "Donna", "Ethel", "Grace",
  "Heather", "Jan", "Katherine",
  "Julie", "Marcia", "Patricia",
  "Mabel", "Jennifer", "Dorthey",
  "Mary Ellen", "Jacki", "Jean",
  "Betty", "Diane", "Annette",
  "Dawn", "Jody", "Karen",
  "Mary Jane", "Shannon", "Stephanie",
  "Kathleen", "Emily", "Tiffany",
  "Angela", "Christine", "Debbie",
  "Karla", "Sandy", "Marilyn",
  "Brenda", "Hayley", "Linda"];

const lastname = ["Adams", "Bowden", "Conway",
  "Darden", "Edwards", "Flynn",
  "Gilliam", "Holiday", "Ingram",
  "Johnson", "Kraemer", "Hunter",
  "McDonald", "Nichols", "Pierce",
  "Sawyer", "Saunders", "Schmidt",
  "Schroeder", "Smith", "Douglas",
  "Ward", "Watson", "Williams",
  "Winters", "Yeager", "Ford",
  "Forman", "Dixon", "Clark",
  "Churchill", "Brown", "Blum",
  "Anderson", "Black", "Cavenaugh",
  "Hampton", "Jenkins", "Prichard"];
let r = 0;
let i = 0;

export function RandomName() {
  r = Math.floor(Math.random() * lastname.length);
  i = Math.floor(Math.random() * name.length);
  return `${name[i]}\u00A0 ${lastname[r]}`
}

export default function Home() {

  const [commits, setCommits] = useState([]);

  const addCommit = (inputValue) => {
    if (inputValue) {
      const newItem = {
        id: Math.random().toString(10),
        text: inputValue,
        name: RandomName(),
        color: '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
      }
      setCommits([...commits, newItem])
    }
  }

  const removeCommit = (id) => {
    setCommits([...commits.filter((commit) => commit.id !== id)])
  }


  return (
    <div className="container">
      <Head>
        <title>Тестовое задание</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <h1 className="title">
          Hello Reddit
        </h1>

        <p className="description">
          Добавить комментарий
        </p>
        <Form addCommit={addCommit}/>
        <div className="example">
          {commits.map((commit) => {
            return (
              <NewCommit key={commit.id} commit={commit} removeCommit={removeCommit}/>
            )
          })}
        </div>

      </main>


      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }


        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
