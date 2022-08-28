import SubscribeComp from "../subscribeNewsletter";
import { Footer } from "./footer";
import { Header } from "./header";


export function Layout(props){
    return(
        <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 bg-zinc-900 z-0">
            {props.children}
            <SubscribeComp/>
        </div>
        <Footer/>
      </div>
    )
}