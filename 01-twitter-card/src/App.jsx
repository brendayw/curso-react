import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
      userName: 'cmdeluzu',
      name: 'Luzu TV',
      isFollowing: true
    },
    {
      userName: 'elejercitodelam',
      name: 'ElEjercitoDeLAM',
      isFollowing: false
    },
    {
      userName: 'justinbieber',
      name: 'Justin Bieber',
      isFollowing: true
    },
]

export function App() {
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing}) => (
                    <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}