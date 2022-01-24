import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #000;
    flex-direction: row;
`
export const FirstImage = styled.Image`
    width: 170px;
    height: 170px;
    border-radius: 30px;
    border: 2px solid red;
`
export const SecondImage = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 20px;
    border: 2px;
`
export const ThirdImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 15px;
    border: 2px;
`
export const TextHeader = styled.Text`
    color: #fff;
    font-size: 20px;
    margin-bottom: 30px;
`
export const TextSubtitle = styled.Text`
    color: #fff;
    font-size: 14px;
    margin-bottom: 10px;
`

export const Text = styled.Text`
    color: #fff;
    font-size: 12px;
    font-weight: bold;
`
export const Avaliation = styled.View`
    width: 165px;
    height: 60px; 
    background-color: black;
    position: absolute; 
    margin-top: 165px; 
    left: 140px;
    border: 2px; 
    border-color: red;
    border-radius: 10px; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const TextAvaliation = styled.Text`
    color: white;
    font-size: 14px;
`
export const TextDescription = styled.Text`
    color: white;
    font-size: 12px;
    margin-top: 20px;
    left: 15px;
`

export const TextTitleModal = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: bold;
`

export const FirstView = styled.View`
    width: 10%;
    height: 100%;
    /* background-color: red; */
    justify-content: center;
    align-items: center;
`

export const SecondView = styled.View`
    width: 90%;
    height: 100%;
    /* background-color: blue; */
    justify-content: space-evenly;
    flex-direction: column;
    padding: 30px;
    padding-right: 30px;
`

export const ListInLine = styled.FlatList`
    flex-direction: row;
`

export const CharactersView = styled.Image`
    width: 130px;
    height: 70px;
    border-radius: 20px;
    border: 2px;
`