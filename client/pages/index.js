// import buildClient from '../api/build-client'
import axios from 'axios'
const LandingPage = ({ currentUser }) => {
    console.log(currentUser)
    return <h1>Landing Page</h1>
}

LandingPage.getInitialProps = async (context) => {
    // const client = buildClient(context)
    // const { data } = await client.get('/api/users/currentuser')
    if (typeof window === 'undefined') {
        const { data } = await axios.get(
            'http://auth-srv:3000/api/users/currentuser',
            {
                headers: context.req.headers,
            }
        )
        console.log({ data })
        return data
    } else {
        // const { data } = await axios.get('api/users/tests')
        return {}
    }
    // return {}
}

export default LandingPage

// ingress-nginx-controller-admission.kube-system.svc.cluster.local
