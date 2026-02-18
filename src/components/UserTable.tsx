interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  isActive: boolean;
  description: string;
  phone: string;
}

export default function UserTable({ users }: { users: User[] }) {
  return (
    <div className="overflow-x-auto">

      <table className="table-fixed min-w-[900px] w-full text-left ">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            {/* Yüzdeler yerine kesin piksel değerleri verdik. Esnemek YASAK! */}
            <th className="w-[150px] px-6 py-4 text-sm font-semibold text-slate-700">İsim</th>
            <th className="w-[150px] px-6 py-4 text-sm font-semibold text-slate-700">Soyisim</th>
            <th className="w-[200px] px-6 py-4 text-sm font-semibold text-slate-700 hidden md:table-cell">Email</th>
            <th className="w-[280px] px-6 py-4 text-sm font-semibold text-slate-700 hidden md:table-cell">Açıklama</th>
            <th className="w-[140px] px-6 py-4 text-sm font-semibold text-slate-700 hidden md:table-cell">Telefon</th>
            <th className="w-[120px] px-6 py-4 text-sm font-semibold text-slate-700">Üyelik Durumu</th>
            <th className="w-[120px] px-6 py-4 text-sm font-semibold text-slate-700 text-center whitespace-nowrap">İşlemler</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-slate-50 transition-colors cursor-pointer">
              <td className="px-6 py-4 text-sm text-slate-900 font-medium truncate" title={user.name}>{user.name}</td>
              <td className="px-6 py-4 text-sm text-slate-900 font-medium truncate" title={user.surname}>{user.surname}</td>
              <td className="px-6 py-4 text-sm text-slate-900 font-medium hidden md:table-cell truncate" title={user.email}>
                {user.email}
              </td>
              <td className="px-6 py-4 text-sm text-slate-900 font-medium hidden md:table-cell truncate" title={user.description}>
                {user.description}
              </td>
              <td className="px-6 py-4 text-sm text-slate-900 font-medium hidden md:table-cell truncate">{user.phone}</td>
              <td className="px-6 py-4 text-sm">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${user.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {user.isActive ? 'Aktif' : 'Pasif'}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-center whitespace-nowrap min-w-[120px]">
                <div className="flex justify-center gap-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    ✏️
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    🗑️
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
