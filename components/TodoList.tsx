'use client'
import { useState } from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { Calendar } from './ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'


const TodoList = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [open, setOpen] = useState(false)

    return (
        <div className='gap-3'>
            {/* Calandar */}
            <h1 className="text-lg font-medium mb-6">Todo List</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className='w-full' variant="outline">
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='p-0 w-auto'>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => { setDate(date); setOpen(false) }}
                    />
                </PopoverContent>
            </Popover>

            {/* TODO LIST */}
            <ScrollArea className="h-[300px] w-[350px] mt-4 overflow-y-auto rounded">
                <div className="flex flex-col gap-2">
                    {/* List Item */}
                    <Card className='p-4'>
                        <div className="flex items-center gap-4">
                            <Checkbox id='item1' />
                            <label htmlFor="item1" className='text-sm text-accent-foreground'>Complete project proposal</label>
                        </div>
                    </Card>
                    {/* List Item */}
                    <Card className='p-4'>
                        <div className="flex items-center gap-4">
                            <Checkbox id='item1' />
                            <label htmlFor="item1" className='text-sm text-accent-foreground'>Complete project proposal</label>
                        </div>
                    </Card>
                    {/* List Item */}
                    <Card className='p-4'>
                        <div className="flex items-center gap-4">
                            <Checkbox id='item1' />
                            <label htmlFor="item1" className='text-sm text-accent-foreground'>Complete project proposal</label>
                        </div>
                    </Card>
                    {/* List Item */}
                    <Card className='p-4'>
                        <div className="flex items-center gap-4">
                            <Checkbox id='item1' />
                            <label htmlFor="item1" className='text-sm text-accent-foreground'>Complete project proposal</label>
                        </div>
                    </Card>
                    {/* List Item */}
                    <Card className='p-4'>
                        <div className="flex items-center gap-4">
                            <Checkbox id='item1' />
                            <label htmlFor="item1" className='text-sm text-accent-foreground'>Complete project proposal</label>
                        </div>
                    </Card>
                    {/* List Item */}
                    <Card className='p-4'>
                        <div className="flex items-center gap-4">
                            <Checkbox id='item1' />
                            <label htmlFor="item1" className='text-sm text-accent-foreground'>Complete project proposal</label>
                        </div>
                    </Card>
                </div>
            </ScrollArea>
        </div>
    )
}

export default TodoList