import {ConnectOptions, connect} from 'mongoose';

export const dbConnect = () => {
    connect("mongodb+srv://getamulu:6ffwpM6tKHZ41Rzx@cluster0.ma5nojt.mongodb.net/yegnadb?retryWrites=true&w=majority", {
        
    } as ConnectOptions).then(
        () => console.log("connect successfully"),
        (error) => console.log(error)
    )
}