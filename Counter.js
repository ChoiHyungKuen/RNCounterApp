import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addCount, minusCount } from './store';


const Counter = () => {
    const [addAmount, setAddAmount] = useState('1');
    const [minusAmount, setMinusAmount] = useState('1');

    const count = useSelector((store) => store);        // -> mapStateToProps 유사

    const dispatch = useDispatch();

    const onSetAddAmount = useCallback((value) => {
        setAddAmount(value);
    }, []);

    const onSetMinusAmount = useCallback((value) => {
        setMinusAmount(value);
    }, []);

    const onAddAmountCount = () => {            
        dispatch(addCount(parseInt(addAmount)));        // -> mapDispatchToProps 유사
    }

    const onMinusAmountCount = () => {
        dispatch(minusCount(parseInt(minusAmount)));
    }

    return (
        <View style={styles.container}>
            <View style={styles.amountRow}>
                <View style={styles.amountInnerView}>
                    <View style={styles.amountTextView}>
                        <Text style={styles.amountText}>증가값: </Text>
                    </View>
                    <View style={styles.amountInnerView}>
                        <TextInput
                            style={styles.amountInput} 
                            keyboardType='number-pad'
                            selectTextOnFocus={true}
                            onChangeText={onSetAddAmount}
                            value={addAmount}
                        />
                    </View>
                </View>
                <View style={styles.amountInnerView}>
                    <View style={styles.amountTextView}>
                        <Text style={styles.amountText}>감솟값: </Text>
                    </View>
                    <View style={styles.amountInnerView}>
                        <TextInput
                            style={styles.amountInput} 
                            keyboardType='number-pad'
                            selectTextOnFocus={true}
                            onChangeText={onSetMinusAmount}
                            value={minusAmount}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.countRow}>
                <View style={styles.btnView}>
                    <TouchableOpacity 
                        onPress={onAddAmountCount}
                        style={styles.btn}>
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.countView}>
                    <Text style={styles.countText}>{count}</Text>
                </View>
                <View style={styles.btnView}>
                    <TouchableOpacity 
                        onPress={onMinusAmountCount}
                        style={styles.btn}>
                        <Text style={styles.btnText}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    amountRow: {
        flex: .1, flexDirection: 'row', alignItems: 'center'
    },
    amountInnerView: {
        width:'50%', height: '100%' , flexDirection: 'row', alignItems: 'center'
    },
    amountTextView: {
        width: '40%', justifyContent: 'center'
    },
    amountInputView: {
        width: '60%', justifyContent: 'center', height: '50%'
    },
    amountText: {
        left: 10, fontSize: 15 
    },
    amountInput:{
        width: '80%', height: '40%', borderWidth: 1, left: 5, paddingLeft: 5
    },
    countRow: {
        flex: .2, flexDirection: 'row', alignItems: 'center'
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
    },
    
});
// const mapStateToProps = (state, ownProps) => {
//     return { count: state }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         onAddCount: (value) => dispatch(addCount(value)),
//         onMinusCount: (value) => dispatch(minusCount(value))
//     }
// }

export default Counter;
  