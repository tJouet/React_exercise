import './App.css'
import ScrollingBar from './components/ScrollingBar'
import { AppContextProvider } from './AppContext'

export default function App((action: any)) {




    if (action === '1234') {
        return <component1></component1>
    }
    if (action === '5678') {
        return <component2></component2>
    }
    if (action === '91011') {
        return <component3></component3>
    }
    if (action === '121314') {
        return <component4></component4>
    }
    if (action === '151617') {
        return <component5></component5>
    }
    if (action === '181920') {
        return <component6></component6>
    }
    if (action === '212223') {
        return <component7></component7>
    }
    if (action === '242526') {
        return <component8></component8>
    }
    if (action === '272829') {
        return <component9></component9>
    }
    if (action === '303132') {
        return <component10></component10>
    }
    if (action === '333435') {
        return <component11></component11>
    }
    if (action === '333435') {
        return <component11></component11>
    }
    if (action === '333435') {
        return <component11></component11>
    }
    if (action === '333435') {
        return <component11></component11>
    }
    if (action === '333435') {
        return <component11></component11>
    }
    if (action === '333435') {
        return <component11></component11>
    }
    if (action === '333435') {
        return <component11></component11>
    }


    else {

        return (
            <AppContextProvider>
                <ScrollingBar />
            </AppContextProvider>
        )
    }


}
