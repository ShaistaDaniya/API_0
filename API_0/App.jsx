import React, { useEffect, useState } from 'react';
import { Text, View} from 'react-native';
const App = () => {
    const [data, setData] = useState([])
    const getAPIData = async () => {
        const url = "http://10.0.2.2:3000/user";
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }
    useEffect(() => {
        getAPIData()
    }, [])

    return (
        <View>
            <Text style={{ fontSize: 30 }}> USING JSON SERVER API</Text>
            {
                data.lenght ?
                    data.map((item) => <View>
                        <Text style={{ fontSize: 30 }}> {item.Name}</Text>
                    </View>)
                    : null
            }
        </View>
    )
}
export default App;