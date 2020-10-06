import React, { useState } from "react";
import { View } from "react-native";
import { useField } from "formik";
import { tw } from "react-native-tailwindcss";

import AppTextInput from "./AppTextInput";
import AppErrorMessage from "./AppErrorMessage";

function AppFormField({ name,icon, ...probs }) {
  const [field, meta] = useField(name);
  const [touched, setTouched] = useState(false);

  function handleOnBlur() {
    setTouched(true);
  }

  return (
    <View style={[tw.mX2, tw.mT1, tw.mB1]}>
      <AppTextInput
        onChangeText={field.onChange(name)}
        onBlur={handleOnBlur}
        value={meta.value}
        icon={icon}
        {...probs}
      />
      {touched && meta.error && (
        <AppErrorMessage error={meta.error} style={[tw.mX2, tw.mT1]} />
      )}
    </View>
  );
}

export default AppFormField;
