export const styles = {
    container: 'container mx-auto px-5 pt-10',
    bg: 'bg-[#F6F4E7] min-h-screen',
    header: {
        header: 'bg-[#F6F3D8] p-4 border-b-2 border-black z-50',
        container: 'container mx-auto flex justify-between items-center',
    },
    item: {
        ul: 'rounded-md shadow-md bg-[#F6F3D8]',
        p: 'text-center text-gray-500 p-4',
        li: 'flex items-center mb-2 block w-full p-3 border border-gray-200 bg-[#F6F3D8] rounded-md',
        span: 'todo-item__description flex-grow',
        checkbox: 'form-check-input me-2',
        checkboxChecked: 'line-through text-gray-500',
    },
    btn: {
        btn: 'inline-flex items-center justify-center ml-2 px-4 py-2 font-semibold bg-green-500 text-white rounded-md shadow-sm hover:bg-green-700 transition',
        deleteBtn: 'inline-flex items-center justify-center px-3 py-2 ml-2 text-sm font-semibold bg-red-500 text-white rounded-md shadow-sm hover:bg-red-700 todo-item__delete',
        editBtn: 'inline-flex items-center justify-center px-3 py-2 text-sm font-semibold bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-700 todo-item__delete',    
        modalCloseBtn: 'text-gray-500 hover:text-gray-700 focus:outline-none',
        modalButtons: 'flex justify-end space-x-3',
        modalCancelBtn: 'px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400',
        modalSaveBtn: 'px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500',

    },
    form: {
        form: 'flex mb-4',
        input: 'block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 me-2',
        validationErrorMsg: 'text-red-500 text-sm mt-1',
    },
    modal: {
        modal: 'fixed inset-0 bg-[#F6F4E7] bg-opacity-50 flex items-center justify-center z-50',
        modalContent: 'bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-auto',
        modalHeader: 'flex justify-between items-center border-b pb-3 mb-4',
        modalTitle: 'text-xl font-semibold text-gray-800',
        modalTextarea: 'w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 resize-y h-32',
    }
}