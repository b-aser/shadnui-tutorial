import AppLineChart from '@/components/AppLineChart'
import CardList from '@/components/CardList'
import EditUser from '@/components/EditUser'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Progress } from '@/components/ui/progress'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { BadgeCheckIcon, Citrus, Shield, Star } from 'lucide-react'
import React from 'react'

const SingleUserPage = () => {
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>John Doe</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* Container */}
            <div className="mt-4 flex flex-col xl:flex-row gap-8">
                {/* LEFT */}
                <div className="w-full xl:w-1/3 space-y-6">
                    {/* USER BAGDE CONTAINER */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className='text-xl font-semibold'>User Badges</h1>
                        
                        <div className="flex gap-4 mt-4">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheckIcon size={36} className='rounded-full bg-blue-300/30 border-1 border-blue-500/50 p-2' />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className='font-bold mb-2'>Verified User</h1>
                                    <p className='text-sm text-muted-foreground'>This user has been verified by the admin.</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Shield size={36} className='rounded-full bg-green-300/30 border-1 border-green-500/50 p-2' />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className='font-bold mb-2'>Trusted User</h1>
                                    <p className='text-sm text-muted-foreground'>This user is trusted by the community.</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Star size={36} className='rounded-full bg-yellow-300/30 border-1 border-yellow-500/50 p-2' />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className='font-bold mb-2'>Awarded</h1>
                                    <p className='text-sm text-muted-foreground'>This user has been awarded for his contributions.</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Citrus size={36} className='rounded-full bg-orange-300/30 border-1 border-orange-500/50 p-2' />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className='font-bold mb-2'>Popular</h1>
                                    <p className='text-sm text-muted-foreground'>This user is popular</p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>
                    {/* INFORMATION CONTAINER */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                        <h1 className='text-xl font-semibold'>User Information</h1>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button>Edit</Button>
                            </SheetTrigger>
                            <EditUser />
                        </Sheet>
                        </div>
                        <div className="space-y-4 mt-4">
                            <div className="flex flex-col gap-2 mb-2">
                                <p className='text-muted-foreground'>Profile Complition</p>
                                <Progress value={65} />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className='font-bold'>Username:</span>
                                <span>john.doe</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className='font-bold'>Email:</span>
                                <span>john.doe@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className='font-bold'>Phone:</span>
                                <span>1234567890</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className='font-bold'>Location:</span>
                                <span>123 Main St, Anytown, USA</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className='font-bold'>Role:</span>
                                <Badge>Admin</Badge>
                            </div>
                        </div>
                        <p className='text-muted-foreground mt-4 text-sm'>Joined on 2025-05-25</p>
                    </div>
                    {/* CARDLIST CONTAINER */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <CardList title="Recent Transactions" />
                    </div>
                </div>

                {/* RIGHT */}
                <div className="w-full xl:w-2/3 space-y-6">
                    {/* USER CARD CONTAINER */}
                    <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
                        <div className="flex items-center gap-2">
                            <Avatar>
                                <AvatarImage src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <h1 className='text-xl font-semibold'>John Doe</h1>
                            
                        </div>
                        <p className='text-muted-foreground text-sm'>@john.doe</p>
                    </div>
                    {/* USER CHART CONTAINER */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className='text-xl font-semibold'>User Activity</h1>
                        <AppLineChart/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleUserPage