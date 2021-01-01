import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const Counter = () => {
    const [count, setCount] = useState(0);
    const onAddCount = () => {
        setCount((prevCount) => {
            return prevCount + 1;
        });
    }

    const onMinusCount = () => {
        setCount((prevCount) => {
            return prevCount - 1;
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.btnView}>
                <TouchableOpacity 
                    onPress={onAddCount}
                    style={styles.btn}>
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.countView}>
                <Text style={styles.countText}>{count}</Text>
            </View>
            <View style={styles.btnView}>
                <TouchableOpacity 
                    onPress={onMinusCount}
                    style={styles.btn}>
                    <Text style={styles.btnText}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
    },
    btnView: { 
        width: '30%', justifyContent: 'center', alignItems: 'center'
    },
    btnText: { 
        fontSize: 40, color: 'white' 
    },
    btn: { 
        width: '70%', backgroundColor: '#2196F3', justifyContent: 'center', alignItems: 'center' 
    },
    countView: {  
        width: '40%', alignItems: 'center' 
    },
    countText: { 
        fontSize: 40 
    }
});
  
  export default Counter;
  