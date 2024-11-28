import { GameLogTable } from '@/components/game-log-table'

export const Home = () => {
  return (
    <main className='h-full'>
      <h1>AOE2 - BATTLELOG</h1>
      <GameLogTable />
    </main>
  )
}
