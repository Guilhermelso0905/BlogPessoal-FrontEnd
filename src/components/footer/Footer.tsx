import { LinkedinLogo } from '@phosphor-icons/react'
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {

        component = (

            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Blog Pessoal Guilherme Lima | Copyright: {data}
                    </p>
                    <p className='text-lg'>Acesse Minhas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="www.linkedin.com/in/guilherme-lima-sousa-oliveira">
                            <LinkedinLogo size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>

        )
    }
    return (
        <>
            { component }
        </>
    )
}

export default Footer