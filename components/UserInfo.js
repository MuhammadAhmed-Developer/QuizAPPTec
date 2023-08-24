
// import SignInBtn from './signInBtn'
import { useSession } from 'next-auth/react'

import Quiz from "@/app/quiz/page";

// import Quiz from '@/app/quiz/page'
import QuizQues from './QuizQues'
import SignIn from '@/app/signIn/page';

export default function UserInfo() {
    const {status, data:session} = useSession()
    if(status === 'authenticated'){
      // return  <div>
      //   <Image className='rounded-full' src={session?.user?.image} alt='user' width={100} height={100}/>
      //   <div>{session?.user?.name}</div>
      //   <div>{session?.user?.email}</div>
      // </div>
       return  <Quiz/>
    }else{
        return <SignIn/>
    }
}

// export default function UserInfo() {
//   return (
//     <div>
//         <Quiz/>
//     </div>
//   )
// }
