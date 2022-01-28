import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";

interface Tabelaprops {
    clientes: Cliente[]
    clienteSelecionado?: (Cliente: Cliente) => void
    clienteExcluido?: (Cliente: Cliente) => void
}

export default function Tabela(props: Tabelaprops) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho() {
        return(
            <tr>
               <th className="text-left p-3">código</th>
               <th className="text-left p-3">Nome</th>
               <th className="text-left p-3">Idade</th> 
               {exibirAcoes ? <th className="text-left p-3">Ações</th> : false } 
            </tr>
        )
    }
    

    function renderizarDados() {
        return props.clientes?.map((cliente, i) =>{
            return (
                <tr key={cliente.id}
                className={`${i % 2 === 0 ? 'bg-green-200' : 'bg-green-100'}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex ">
                {props.clienteSelecionado ? (
                     <button onClick={() => props.clienteSelecionado?.(cliente)} className="{`
                     flex justify-center items-center
                     text-green-600 rounded-full p-2 m-1
                     hover:bg-green-50
                 `}">
                     {IconeEdicao}
                 </button>
                ): false}

               {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)} className="{`
                    flex justify-center items-center
                    text-red-500 rounded-full p-2 m-1
                    hover:bg-green-50
                `}">
                    {IconeLixo}
                </button>
               ): false}

            </td>
        )
    }


    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="{`
            text-gray-700
            bg-gradient-to-r from-green-700 
            `}">
            {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
} 