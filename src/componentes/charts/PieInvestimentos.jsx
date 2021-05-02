import { PieChart, Pie, Legend, Cell } from 'recharts'

export default function PieInvestimentos(props) {
    const dados = props.dados
    const cores = ['#92a8d1', '#96ceb4', '#f18973', '#feb236']

    return (
        <PieChart width={500} height={300} >
            <Legend 
                verticalAlign="bottom" 
                height={20}
                iconType='circle'
                iconSize={10}
            />
                
            <Pie 
                data={dados} 
                dataKey="value" 
                nameKey="name" 
                cx="50%" 
                cy="50%" 
                outerRadius={100}
                legendType='line'
            >
                {dados.map((entry, index) => (<Cell key={'nada'+index} fill={cores[index]}/>))}
            </Pie>
        </PieChart>
    )
}