import React from "react";
import { View, Text, Image } from "react-native";
import { create } from "react-test-renderer";
function Wellcome(props) {
    return <View style={{
        backgroundColor: 'white',
        flex: 1
    }}>
        <View style={{
            flexDirection: 'row',
            height: 50,
            backgroundColor: 'orange',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>
            <Image
                source={require('../img/icon/fire.png')}
                style={{
                    width: 30,
                    height: 30,
                    marginStart:10,
                    marginEnd:5
                }} />
            <Text style={{
                color: 'white'
            }}>YOURCOMPANY.CO
            </Text>
            <View style={{ flex: 1 }} />
            <Image
                source={require('../img/icon/question.png')}
                style={{
                    width: 20,
                    height: 20,
                    marginEnd:10,
                    tintColor: 'white'
                }} />
        </View>
    </View>
}

export default Wellcome

