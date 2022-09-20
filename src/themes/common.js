import { db } from "./color";
export const createTable = () => {
    db.transaction((tx) => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS "
            + "Task "
            + "(Id INTEGER PRIMARY KEY AUTOINCREMENT, TaskName TEXT,isDelete BOOLEAN);"
        )
    })
}

export const addToList = async (value) => {
    await db.transaction(async (tx) => {
        await tx.executeSql(
            "INSERT INTO Task (TASKNAME,isDelete) VALUES (?,?)",
            [value, false],
            () => {
                console.log('Task Is Added');
            }
        )
    })
}

export const updateList = async (value, Id) => {
    await db.transaction((tx) => {
        tx.executeSql(
            "UPDATE Task set TASKNAME = ? WHERE Id=?",
            [value, Id],
            () => { console.log('Update') }
        )
    })
}

export const deleteTaskSqlit = async (Id) => {
    await db.transaction((tx) => {
        tx.executeSql(
            "DELETE FROM Task WHERE Id =?",
            [Id],
            () => { console.log('Task Deleted..') }
        )
    })
}