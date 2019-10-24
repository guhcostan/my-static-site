import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import {useRouteData} from "react-static";

const StyleContainer = styled.div`
    background-color: black;
`

const ArrowIcon = styled.div`
    
`
const MainText = styled.h1`
    color: white;
    font-family: CovesBold;
    font-size: 7vw;
    text-align: center;
`

const SubText = styled.h1`
    color: white;
    font-family: CovesBold;
    font-size: 3vw;
    text-align: center;
`

function escrever(str, id) {
    return new Promise(resolve => {
    var div = document.getElementById(id)

    var char = str.split('').reverse();
    var typer = setInterval(function() {
        if (!char.length) {
            resolve(true)
            return clearInterval(typer);}
        var next = char.pop();
        div.innerHTML += next;

    }, 100);



    })
}

export default function () {

    useEffect(() => {
        escrever('Olá, eu sou Gustavo Costa', 'oi').then(() => {
            escrever('Sou desenvolvedor a 2 anos, e lhes apresento o meu site.', 'profissao').then(() => {
                escrever('Seja bem vindo.', 'welcome')
            });
        });
    })

    return (
        <StyleContainer>
            <MainText id={'oi'}></MainText>
            <SubText id={'profissao'}></SubText>
            <SubText id={'welcome'}></SubText>
        </StyleContainer>
    )
}
