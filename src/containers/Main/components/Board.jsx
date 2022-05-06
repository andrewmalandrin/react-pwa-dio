import React, { memo } from "react"
import PropTypes from 'prop-types'
import { Grid, Skeleton} from '../../../components/'
import Card from './Card'

function Board({ data }) {
    const {cases, todayDeaths, recovered, todayCases, deaths } = data
    
    const getValue = value => value ? value.toString() : <Skeleton variant="text" width={182} height={60} />



    return(
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Card value={getValue(cases)} label="Total de Casos" color="#5d78ff"/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(todayDeaths)} label="Óbitos Hoje" color="#F7B829"/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(todayCases)} label="Casos hoje" color="#5d78ff"/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(deaths)} label="Mortes totais" color="#5d78ff"/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(recovered)} label="Recuperados" color="#5d78ff"/>
            </Grid>
        </Grid>
    )
}

export default memo(Board)