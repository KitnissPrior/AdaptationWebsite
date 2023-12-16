export const TASK_STATUS = {
  0: "В процессе",
  1: "Отправлено на проверку",
  2: "Отправлено на доработку",
  3: "Готово",
}

export const Columns = [
    {
        title: 'Название',
        dataIndex: 'title',
        key: 'title',
        width: '30%',
      },
      {
        title: 'Описание',
        dataIndex: 'body',
        key: 'body',
        width: '30%',
      },
      {
        title: 'Срок сдачи',
        dataIndex: 'deadline',
        key: 'deadline',
        render: (value) => {
          if (value === null) return 'Не определен';
          const formattedDate = new Date(value).toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
           });
          return `${formattedDate}`;
        },
        width: '20%',
      },
      {
        title: 'Статус',
        dataIndex: 'status',
        key: 'status',
        render: (value) => {
          if (value === null) return TASK_STATUS[0];
          //const status = value? TASK_STATUS[value] : TASK_STATUS[0]
          return (<span>{TASK_STATUS[value] }</span>)},
        width: '20%',
      }
];
