import React, {useState} from 'react';
import GridLayout, {Layout} from 'react-grid-layout';

import Panel from './panel';

import 'react-grid-layout/css/styles.css';
import './index.css';

function changeWidthTo(layout: Layout, newWidth: number): Layout {
  return {
    ...layout,
    h: newWidth,
  };
}

export default function Hello() {

  const [layout, setLayout] = useState<Layout[]>([
    {'w': 1, 'h': 3, 'x': 0, 'y': 0, 'i': 'a'},
    {'w': 1, 'h': 3, 'x': 1, 'y': 0, 'i': 'b'},
    {'w': 3, 'h': 3, 'x': 0, 'y': 2, 'i': 'c'},
  ]);

  function resizeCell(layoutKey: string, showBody: boolean) {
    const newLayout = layout.map(item => {
      if (item.i === layoutKey) {
        if (showBody) {
          // Notice:
          // we need to create an layout object to make it work,
          // instead of modifying existing one
          return changeWidthTo(item, 3);
        } else {
          return changeWidthTo(item, 1);
        }
      } else {
        return item;
      }
    });
    setLayout(newLayout);
  }

  return <div>
    <h1>Hello React-Grid-Layout</h1>
    <textarea className="layout-info" value={JSON.stringify(layout)} readOnly={true}/>
    <GridLayout className='layout' cols={4} rowHeight={30} width={1200}
                layout={layout} onLayoutChange={setLayout}
                compactType='vertical'>
      <div key='a'>
        <Panel header='A' content='Click on header to toggle' onToggle={showBody => resizeCell('a', showBody)}/>
      </div>
      <div key='b'>
        <Panel header='B' content='Click on header to toggle' onToggle={showBody => resizeCell('b', showBody)}/>
      </div>
      <div key='c'>
        <Panel header='C' content='Click on header to toggle' onToggle={showBody => resizeCell('c', showBody)}/>
      </div>
    </GridLayout>
  </div>;
};
