import Document from './Document'
import './App.css'
import MainPage from './components/MainPage'

function App() {
  const documents : Document[] = [
    {
      title: 'Документ 1',
      text: 'Текст документа 1',
    }, 
    {
      title: 'Документ 2',
      text: 'Текст документа 2',
    },
    {
      title: 'Документ 3',
      text: 'Необходимо реализовать страницу со статьями. Все статьи – это список компонентов Accordion из MUI. В заголовке аккордеона указано название статьи, в развороте ее содержание. Статье располагаются списком в столбец, растягиваясь на всю ширину корневого компонента Container. Между аккордеонами должно быть расстояние, настраиваемое при помощи родительского компонента Stack. Также компонент аккордеона нужно дополнительно стилизовать в зависимости от пропса isOdd. Все четные по счету статьи должны быть синего цвета, все нечетные – черного. При наведении на аккордеон статьи, границы компонента должны подсвечиваться красным цветом. Этот функционал необходимо выполнить при помощи SASS. При помощи CSS и псевдокласса :first-letter выделите первую букву статьи большим размером относительно других букв и окрасьте ее в красный. При необходимости настройте темизацию приложения: цветовая палитра, шрифт по умолчанию. Задание со звездочкой: используя документацию настройте темную и светлую темы страницы и создайте переключатель темы. ',
    },
    {
      title: 'Документ 4',
      text: 'Текст документа 4',
    }
  ]

  return (
    <MainPage items={documents}/>
  )
}

export default App