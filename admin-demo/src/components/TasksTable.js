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
          const dateObj = new Date(value);
          const day = dateObj.getDate();
          const month = dateObj.getMonth() + 1; // месяцы в JavaScript начинаются с 0
          const year = dateObj.getFullYear();
          return `${day}.${month}.${year}`;
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
