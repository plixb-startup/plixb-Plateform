import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../components/Header/header'
import { isFunctionExpression } from 'typescript'

export default function PostPage() {
    const router = useRouter()
    const id = router.query.id as string;


    return (<>
    
        <Header />
        <h1>Post: {id}</h1>
        <ul>
            <li>
                <Link href={`/post/${id}/first-comment`}>First Comment</Link>
            </li>
        </ul>
    </>)
}