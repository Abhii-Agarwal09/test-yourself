import React from 'react'
import QuizProgress from './QuizProgress'
import Sidebar from './Sidebar'

function Dashboard(){
    return(
            <div className='dashboard-layout'>
                <Sidebar />
                <QuizProgress />
            </div>
    )
}
export default Dashboard