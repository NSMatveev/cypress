describe('free-shipping-bar',function(){
    it('create-bar',function(){
        cy.request({
            method:'POST', 
            url:'https://microservice-shipping-bar.staging.bolide.io/api/bars',
            headers:{
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdGFnaW5nLWJvbGlkZWFpLm15c2hvcGlmeS5jb20iLCJhdWQiOiIwYmJhNjFlNzA1ZmFmMjM0Mzc0YmZjOWQ2NTRkOWM1NiIsImp0aSI6ImJvbGlkZWFpLjYyZjEwZTQ1ZDY1YWUzLjk3NjY5MTk4Iiwic3ViIjoidG9rZW5zIiwiZXhwIjoxNjYwNTY5Nzk3Ljg3NzQwNCwibmJmIjoxNjU5OTY0OTk3Ljg3NzQwNCwiaWF0IjoxNjU5OTY0OTk3Ljg3NzQwNCwidWlkIjoyLCJhY3QiOiJzaHBhdF8wZjc2ZTdmMDBmNjljYjBkMmYxZDFlMDdjMTJjMmIzYyJ9.dkxR4fxN-eMxGKwhPlDDmGUM9oJIza9ruvWS36sIdxQ'            }
            }).then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('is_active')
            expect(response.body).to.have.property('title')
            expect(response.body).to.have.property('unique_key')
            
        })
    })
    it('get-bar',function(){
        cy.request({
            method:'POST',
            url:'https://microservice-shipping-bar.staging.bolide.io/api/bars/{barId}/edit'
        })
    })
})