fetch("https://fakestoreapi.com/products").then(res => res.json()).then(data =>{
     
    const divDetais=document.getElementById("divDetais");
     data.forEach(product =>
     {
        divDetais.innerHTML+=`
                 <div class="col">
                        <div class="card shadow-sm"> 
                             <img src="${product.image}"
                             class="card-img-top" 
                             alt="${product.title}"
                             style="height:300px; object-fit:contain;padding 20px;"
                             >
                            <div class="card-body">
                                  <h5>${product.title}</h5>
                                   <h6>${product.price}</h6> 
                                <p class="card-text">${product.description}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group"> <button type="button"
                                            class="btn btn-sm btn-outline-secondary">View</button> <button type="button"
                                            class="btn btn-sm btn-outline-secondary">Edit</button> </div> <small
                                        class="text-body-secondary">${product.category}</small>
                                </div>
                            </div>
                        </div>
                    </div>
        
        `
     }
     )
});