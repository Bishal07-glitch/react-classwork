import {Card, Space} from "antd";
import './single.css'
import {useEffect, useState} from "react";
import axios from "axios";
export default function Single( {data} ){

	const [pokedata, setPokedata] = useState([])
	const[loading, setLoading] = useState(true);

	useEffect( () => {
		axios.get(data.url)
			.then((response) => {
				setPokedata(response.data)
				setLoading(false);
			})
	}, [] );

	return (
		<div className="cardWrapper">
			{
				loading ?
					<>Loading...</>
					:
					<Card title={data.name}>
						<p>height: {pokedata.height}</p>
						<p>weight : {pokedata.weight}</p>

						<h2>Abilities</h2>
						<ul>
							{
								pokedata.abilities.map((item, index) => {
									return <li key={index}>{item.ability.name}</li>
								})
							}
						</ul>
					</Card>
			}

		</div>
	)
}