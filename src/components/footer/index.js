import React from 'react';
import {Container, Row, Column, Link, Title, Text, Break} from './styles/footer';

export default function Footer({children, ...restProps}){
return <Container {...restProps}>{children}</Container>
}

Footer.Row = function Footrow({children, ...restProps}){
    return <Row {...restProps}>{children}</Row>
};

Footer.Column  = function FootColumn({children, ...restProps}){
    return <Column {...restProps}>{children}</Column>
};

Footer.Link = function FootLink({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
};

Footer.Title = function FootTitle({children, ...restProps}){
    return <Title{...restProps}>{children}</Title>
};

Footer.Text = function FootText({children, ...restProps}){
    return <Text{...restProps}>{children}</Text>
};

Footer.Break = function FootBreak({children, ...restProps}){
    return <Break{...restProps}>{children}</Break>
};