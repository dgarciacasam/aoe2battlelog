import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

import { maps } from '@/data/maps'

interface GameLogEntry {
  id: string
  mapName: string
  mapImage: string
  playerCivilization: string
  opponentCivilization: string
  opponentName: string
  victoryCondition: string
  mistakes: string[]
}

const gameLogData: GameLogEntry[] = [
  {
    id: '1',
    mapName: 'Arabia',
    mapImage: '/placeholder.svg?height=50&width=50',
    playerCivilization: 'Franks',
    opponentCivilization: 'Britons',
    opponentName: 'ArqueroMortal',
    victoryCondition: 'Conquest',
    mistakes: ['Late Feudal Age', 'Poor scouting', 'Weak economy'],
  },
  {
    id: '2',
    mapName: 'Black Forest',
    mapImage: '/placeholder.svg?height=50&width=50',
    playerCivilization: 'Celts',
    opponentCivilization: 'Teutons',
    opponentName: 'CastilloRápido',
    victoryCondition: 'Wonder',
    mistakes: ['Insufficient wall', 'Late Castle Age', 'Poor unit composition'],
  },
]

export const GameLogTable = () => {
  return (
    <Table className='text-center'>
      <TableCaption>
        Registro de partidas recientes de Age of Empires II
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Mapa</TableHead>
          <TableHead>Civilización</TableHead>
          <TableHead>Oponente</TableHead>
          <TableHead>Civilización Oponente</TableHead>
          <TableHead>Condición de Victoria</TableHead>
          <TableHead className='text-right'>Fallos</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {gameLogData.map((entry) => (
          <TableRow key={entry.id}>
            <TableCell className='font-medium w-[100px]'>
              <div className='flex flex-col items-center justify-center space-x-2'>
                <img src={maps[0].image} alt='' />
                <span>{maps[0].name}</span>
              </div>
            </TableCell>
            <TableCell>{entry.playerCivilization}</TableCell>
            <TableCell>{entry.opponentName}</TableCell>
            <TableCell>{entry.opponentCivilization}</TableCell>
            <TableCell>{entry.victoryCondition}</TableCell>
            <TableCell className='text-right'>
              <div className='flex flex-wrap justify-end gap-1'>
                {entry.mistakes.map((mistake, index) => (
                  <Badge key={index} variant='secondary'>
                    {mistake}
                  </Badge>
                ))}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
