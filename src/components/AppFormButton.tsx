import React, { useEffect } from 'react';
import { useFormikContext} from 'formik';
import {tw} from 'react-native-tailwindcss'
import AppButton from './AppButton';

function AppFormButton({name, loading, handleIconOnPress}){
    const {submitForm,validateForm, isValid} = useFormikContext();
    useEffect(() =>{
        validateForm();
    },[isValid])    
    return (
        <AppButton title={name} loading={loading} onPress={submitForm} handleIconOnPress={handleIconOnPress} disabled={!isValid} />
    );
}
export default AppFormButton;