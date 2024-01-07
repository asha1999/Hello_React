// const heading = React.createElement('h1', {id:'headin'}, "Hello from React!");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);


/*
* <div>
       <div>
       <h1> </h1>
       </div>
    </div>
*
*
*/

const Parent = React.createElement('div', {id:'parent'}, React.createElement('div', {id:'child'}, 
[React.createElement('h1', {id:'headin'},'Hello from React! heading h1'),  React.createElement('h2', {},
'headind2 from Legacy react')]));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(Parent);