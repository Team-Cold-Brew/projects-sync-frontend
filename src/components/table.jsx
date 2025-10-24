function Table() {
    return (
        <main class="p-6">
            <div class="overflow-x-auto">
                <table class="min-w-full bg-white">
                    <thead class="text-black">
                        <tr>
                            <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Nombre</th>
                            <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Título</th>
                            <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-700">
                        <tr class="hover:bg-gray-100">
                            <td class="w-1/3 text-left py-3 px-4">Lian</td>
                            <td class="w-1/3 text-left py-3 px-4">Diseñador</td>
                            <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:lian@example.com">lian@example.com</a></td>
                        </tr>
                        <tr class="bg-gray-100 hover:bg-gray-200">
                            <td class="w-1/3 text-left py-3 px-4">Emma</td>
                            <td class="w-1/3 text-left py-3 px-4">Desarrolladora</td>
                            <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:emma@example.com">emma@example.com</a></td>
                        </tr>
                        <tr class="hover:bg-gray-100">
                            <td class="w-1/3 text-left py-3 px-4">James</td>
                            <td class="w-1/3 text-left py-3 px-4">Gerente</td>
                            <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:james@example.com">james@example.com</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}

async function renderTable() {
    
}

export default Table