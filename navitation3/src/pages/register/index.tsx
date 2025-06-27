
import {  Image, Text, TextInput, TouchableOpacity, View  } from "react-native";
import { styles } from "./styles";
import { Controller, useForm } from "react-hook-form";
import {  MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";
import { themas } from "../../global/themes";
import Logo from '../../assets/logo.png';


export default function Register (){

    interface ConsoleLog {
        name:string,
        email:string,
        password:string,
        confirmPassword:string
    }

    const [consoleLog, setConsoleLog] = useState<ConsoleLog | null>(null);

    interface formRegister {
        name:string,
        email:string,
        password:string,
        confirmPassword:string
    }
   
    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
        watch,
    } = useForm<formRegister>();
    const matchPassword = watch("password");

    const onSubmit = (data:formRegister) => {
        setConsoleLog(data)
    }

    return (
        <>
           <View style={styles.container}>
                <View style={styles.logoAndWelcome}>
                      <Image source={Logo} />
                      <Text style={styles.textLogo}>Cadastro</Text>
                      {/* <Text style={styles.textLogo}>{consoleLog?consoleLog.name:''}</Text>
                      <Text style={styles.textLogo}>{consoleLog?consoleLog.email:''}</Text>
                      <Text style={styles.textLogo}>{consoleLog?consoleLog.password:''}</Text>
                      <Text style={styles.textLogo}>{consoleLog?consoleLog.confirmPassword:''}</Text> */}
               
                </View>
                
                <View style={styles.formContainer}>
                    <View>
                        <Text style={styles.labelInput}>NOME:</Text>
                        <View style={styles.inputAndIcon}>
                            <Controller
                                control={control}
                                name="name"
                                rules={{ required: 'Nome é obrigatório' }}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        onChangeText={onChange}
                                        value={value}
                                        style={styles.input}
                                    />
                                )}
                            />
                            <MaterialIcons name="person" size={20} color={themas.colors.lightGray1} />
                        </View>
                        {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}
                    </View>
                    <View>
                        <Text style={styles.labelInput}>ENDEREÇO DE EMAIL:</Text>
                        <View style={styles.inputAndIcon}>
                            <Controller
                                control={control}
                                name="email"
                                rules={{ required: 'Email é obrigatório' }}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        onChangeText={onChange}
                                        value={value}
                                        style={styles.input}
                                    />
                                )}
                            />
                            <MaterialIcons name="email" size={20} color={themas.colors.lightGray1} />
                        </View>
                        {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
                    </View>
                    <View>
                        <Text style={styles.labelInput}>SENHA:</Text>
                        <View style={styles.inputAndIcon}>
                            <Controller
                                control={control}
                                name="password"
                                rules={{ required: 'Senha é obrigatória' }}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        onChangeText={onChange}
                                        value={value}
                                        style={styles.input}
                                    />
                                )}
                            />
                            <MaterialIcons name="lock" size={20} color={themas.colors.lightGray1} />

                        </View>
                        {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
                    </View>
                    <View>
                        <Text style={styles.labelInput}>CONFIRME A SENHA:</Text>
                        <View style={styles.inputAndIcon}>
                            <Controller
                                control={control}
                                name="confirmPassword"
                                rules={{
                                        required: 'Confirmação de senha é obrigatória',  validate: (value) =>
                                        value === matchPassword || "As senhas não conferem",
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        onChangeText={onChange}
                                        value={value}
                                        style={styles.input}
                                    />
                                )}
                            />
                            <MaterialIcons name="lock-outline" size={20} color={themas.colors.lightGray1} />
                        </View>
                        {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword.message}</Text>}
                    </View>
                    <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
                        <Text  style={styles.textButton}>
                            Entrar
                        </Text>
                    </TouchableOpacity>
                   
                </View>
                
                <View style={styles.footer}>
                    <View style={styles.register}>
                        <Text style={styles.textLink}>Não tem uma conta? </Text>
                        <TouchableOpacity>
                            <Text style={styles.registerLink}>Crie Agora</Text>
                        </TouchableOpacity> 
                    </View>       
                </View>
            </View>
        </>
    )

}