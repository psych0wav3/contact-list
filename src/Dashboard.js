import { ContainerPanel, Button, Input, Dropdown, Container } from './styles'
import { useState } from 'react'
import MaterialTable from 'material-table';

const Dashboard = () => {

  const [user, setUser] = useState("")
  const [phone, setPhone] = useState("")
  const [department, setDepartment] = useState("")
  const [responsibility, setResponsibility] = useState("")
  const [store, setStore] = useState("")

  const data = [
    {
      "id": 1,
      "usuario": "Nubia Ferreira",
      "telefone": "(11) 95618-2891",
      "loja": "02",
      "departamento": "Comercial",
      "cargo": "Líder de Caixa"
    },
    {
      "id": 2,
      "usuario": "Rosangela Venâncio",
      "telefone": "(11) 97194-2123",
      "loja": "03",
      "departamento": "comercial",
      "cargo": "Líder"
    },
    {
      "id": 3,
      "usuario": "Recepção UV",
      "telefone": "(11) 97308-0122",
      "loja": "03",
      "departamento": "Comercial",
      "cargo": "Recepção"
    },
    {
      "id": 4,
      "usuario": "Recepção UG",
      "telefone": "(11) 99651-6626",
      "loja": "04",
      "departamento": "Comercial",
      "cargo": "Recepção"
    },
    {
      "id": 5,
      "usuario": "Recepção UM",
      "telefone": "(11) 99647-6129",
      "loja": "02",
      "departamento": "Comercial",
      "cargo": "Recepção"
    },
    {
      "id": 6,
      "usuario": "Recepção UP\t",
      "telefone": "(11) 99636-9133",
      "loja": "06",
      "departamento": "Comercial",
      "cargo": "Recepção"
    },
    {
      "id": 7,
      "usuario": "Valmir Romao",
      "telefone": "(11) 98107-5058",
      "loja": "03",
      "departamento": "Vendas",
      "cargo": "Gerente"
    },
    {
      "id": 8,
      "usuario": "Sandro Santo",
      "telefone": "(11) 94138-8018",
      "loja": "04",
      "departamento": "Vendas",
      "cargo": "Supervisor"
    },
  ]
  
  return (
    <Container>
    <ContainerPanel>
      <Input onChange={e => setUser(e.target.value)} placeholder="Usuário" />
      <Input onChange={e => setPhone(e.target.value)} placeholder="Telefone" />
      <Input onChange={e => setDepartment(e.target.value)} placeholder="Departamento" />
      <Input onChange={e => setResponsibility(e.target.value)} placeholder="Cargo" />
      <Dropdown onChange={e => setStore(e.target.value)}>
        <option value="">Selecione uma Loja</option>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
      </Dropdown>
      <Button>Cadastrar</Button>
    </ContainerPanel>
    <MaterialTable
      title="Contatos"
      data={data}
      columns={[
        {title: 'Nome', field:'usuario'},
        {title: 'Telefone', field:'telefone'},
        {title: 'Loja', field:'loja'},
        {title: 'Departamento', field:'departamento'},
        {title: 'Cargo', field:'cargo'},
      ]}
      options={{
        selection:true,
        filtering:true,
      }}

      actions={[
        {
          tooltip: 'Deletar Selecionados',
          icon: 'delete',
          onClick: (evt, data) => console.log(data)
        }
      ]}
    />
    </Container>
  );
}

export default Dashboard;
