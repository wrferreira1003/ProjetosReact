import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'
import './global.css'




const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/103975942?v=4",
      name: 'Wellington Rodrigues',
      role: 'Programador',
    }, 
    content: [
      { type: 'paragraph' as 'paragraph', content: 'Fala pessoal 👋',},
      { type: 'paragraph' as 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻.'},
      { type: 'link' as 'link', content: 'Acesse e deixe seu feedback 👉 devonlane.design'},
    ],
    publishedAt: new Date('2023-05-29 20:00:00'),

  },

  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/103967965?v=4",
      name: 'Paulo PH',
      role: 'Programador Senior',
    }, 
    content: [
      { type: 'paragraph' as 'paragraph', content: 'Fala pessoal 👋',},
      { type: 'paragraph' as 'paragraph', content: 'Grande Post 💪🏻.'},
      { type: 'link' as 'link', content: 'Acesse e deixe seu feedback 👉 devonlane.design'},
    ],
    publishedAt: new Date('2023-05-03 20:00:00'),

  },
]


export function App() {
  return (
    <div>
      <Header />  

        <div className={styles.wrapper}>
        
        <Sidebar />
        
        <main>
          
          {posts.map(post => {
            return (<Post 
                      key={post.id}
                      author={post.author}
                      content={post.content}
                      publishedAt={post.publishedAt}
            
                    />
            )
          })}  


        </main>


      </div>
      

    </div>
  )
}

