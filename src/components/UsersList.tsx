import { User } from '../types';

interface Props {
    users: User[];
}

export function UsersList({ users }: Props) {
    return (
        <table width="100%">
            <thead>
                <tr>
                    <th>Foto</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Pais</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.email}>
                        <td>
                            <img src={user.picture.large} alt="User" />
                        </td>
                        <td>{user.name.first}</td>
                        <td>{user.name.last}</td>
                        <td>{user.location.country}</td>
                        <td>
                            <button onClick={() => console.log("Eliminar")}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
