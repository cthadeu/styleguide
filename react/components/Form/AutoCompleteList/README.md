```js
<div style={{ height: '250px' }}>
  <div className="db">
    <div className="relative">
      <AutoCompleteList
        list={[
          { id: '1', label: 'Item1' },
          { id: '2', label: 'Item2' },
          { id: '3', label: 'Item3' },
          { id: '4', label: 'Item4' },
          { id: '5', label: 'Item5' },
          { id: '6', label: 'Item6' },
          { id: '7', label: 'Morango' },
          { id: '8', label: 'Mamão' },
          { id: '9', label: 'Limão' }
        ]}
        onClick={selected => console.log(selected)}
      />
      <AutoCompleteList
        disabled={true}
        list={[{ id: '1', label: 'Item1' }]}
        onClick={selected => console.log(selected)}
      />
    </div>
  </div>
</div>
```
