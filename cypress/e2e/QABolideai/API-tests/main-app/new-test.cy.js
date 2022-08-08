describe('main-app-test',()=>{
    it('1st-test', ()=>{
        cy.request({
            method:'GET', 
            url:'https://microservice-shipping-bar.staging.bolide.io/health',
            headers:{
                'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdGFnaW5nLWJvbGlkZWFpLm15c2hvcGlmeS5jb20iLCJhdWQiOiIwYmJhNjFlNzA1ZmFmMjM0Mzc0YmZjOWQ2NTRkOWM1NiIsImp0aSI6ImJvbGlkZWFpLjYyM2FlNzk2MjBkMmM0LjIyMjg1NjEwIiwic3ViIjoic3Vic2NyaWJlLXNlcnZpY2VzIiwiZXhwIjoxODA1NzkzOTQyLjEzMzY5MiwibmJmIjoxNjQ4MDI3NTQyLjEzMzY5MiwiaWF0IjoxNjQ4MDI3NTQyLjEzMzY5MiwidWlkIjoxLCJhY3QiOiJzaHBhdF84N2FmMGEyOTQ3ZTYwMTY5MmEyNDYxZWU2NDJkYzVmZiJ9.AEjGeYymx0fEmMpAJ2laEJRQoQzSf6_bEUPOeIN0Hhs"
            }
            }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            
        })
        cy.request({
            method:'GET', 
            url:'https://microservice-scroll-button.staging.bolide.io/health',
            headers:{
                'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdGFnaW5nLWJvbGlkZWFpLm15c2hvcGlmeS5jb20iLCJhdWQiOiIwYmJhNjFlNzA1ZmFmMjM0Mzc0YmZjOWQ2NTRkOWM1NiIsImp0aSI6ImJvbGlkZWFpLjYyM2FlNzk2MjBkMmM0LjIyMjg1NjEwIiwic3ViIjoic3Vic2NyaWJlLXNlcnZpY2VzIiwiZXhwIjoxODA1NzkzOTQyLjEzMzY5MiwibmJmIjoxNjQ4MDI3NTQyLjEzMzY5MiwiaWF0IjoxNjQ4MDI3NTQyLjEzMzY5MiwidWlkIjoxLCJhY3QiOiJzaHBhdF84N2FmMGEyOTQ3ZTYwMTY5MmEyNDYxZWU2NDJkYzVmZiJ9.AEjGeYymx0fEmMpAJ2laEJRQoQzSf6_bEUPOeIN0Hhs"
            }
            }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            
        })
        cy.request({
            method:'GET', 
            url:'https://microservice-analytics.staging.bolide.io/health',
            headers:{
                'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdGFnaW5nLWJvbGlkZWFpLm15c2hvcGlmeS5jb20iLCJhdWQiOiIwYmJhNjFlNzA1ZmFmMjM0Mzc0YmZjOWQ2NTRkOWM1NiIsImp0aSI6ImJvbGlkZWFpLjYyM2FlNzk2MjBkMmM0LjIyMjg1NjEwIiwic3ViIjoic3Vic2NyaWJlLXNlcnZpY2VzIiwiZXhwIjoxODA1NzkzOTQyLjEzMzY5MiwibmJmIjoxNjQ4MDI3NTQyLjEzMzY5MiwiaWF0IjoxNjQ4MDI3NTQyLjEzMzY5MiwidWlkIjoxLCJhY3QiOiJzaHBhdF84N2FmMGEyOTQ3ZTYwMTY5MmEyNDYxZWU2NDJkYzVmZiJ9.AEjGeYymx0fEmMpAJ2laEJRQoQzSf6_bEUPOeIN0Hhs"
            }
            }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            
        })
        cy.request({
            method:'GET', 
            url:'https://microservice-upsell-cross-sell-widgets.staging.bolide.io/health',
            headers:{
                'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdGFnaW5nLWJvbGlkZWFpLm15c2hvcGlmeS5jb20iLCJhdWQiOiIwYmJhNjFlNzA1ZmFmMjM0Mzc0YmZjOWQ2NTRkOWM1NiIsImp0aSI6ImJvbGlkZWFpLjYyM2FlNzk2MjBkMmM0LjIyMjg1NjEwIiwic3ViIjoic3Vic2NyaWJlLXNlcnZpY2VzIiwiZXhwIjoxODA1NzkzOTQyLjEzMzY5MiwibmJmIjoxNjQ4MDI3NTQyLjEzMzY5MiwiaWF0IjoxNjQ4MDI3NTQyLjEzMzY5MiwidWlkIjoxLCJhY3QiOiJzaHBhdF84N2FmMGEyOTQ3ZTYwMTY5MmEyNDYxZWU2NDJkYzVmZiJ9.AEjGeYymx0fEmMpAJ2laEJRQoQzSf6_bEUPOeIN0Hhs"
            }
            }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            
        })

        cy.request({
            method:'GET', 
            url:'https://microservice-event-listener.staging.bolide.io/health',
            headers:{
                'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdGFnaW5nLWJvbGlkZWFpLm15c2hvcGlmeS5jb20iLCJhdWQiOiIwYmJhNjFlNzA1ZmFmMjM0Mzc0YmZjOWQ2NTRkOWM1NiIsImp0aSI6ImJvbGlkZWFpLjYyM2FlNzk2MjBkMmM0LjIyMjg1NjEwIiwic3ViIjoic3Vic2NyaWJlLXNlcnZpY2VzIiwiZXhwIjoxODA1NzkzOTQyLjEzMzY5MiwibmJmIjoxNjQ4MDI3NTQyLjEzMzY5MiwiaWF0IjoxNjQ4MDI3NTQyLjEzMzY5MiwidWlkIjoxLCJhY3QiOiJzaHBhdF84N2FmMGEyOTQ3ZTYwMTY5MmEyNDYxZWU2NDJkYzVmZiJ9.AEjGeYymx0fEmMpAJ2laEJRQoQzSf6_bEUPOeIN0Hhs"
            }
            }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            
        })
        cy.request({
            method:'GET', 
            url:'https://main-app.staging.bolide.io/health',
            headers:{
                'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdGFnaW5nLWJvbGlkZWFpLm15c2hvcGlmeS5jb20iLCJhdWQiOiIwYmJhNjFlNzA1ZmFmMjM0Mzc0YmZjOWQ2NTRkOWM1NiIsImp0aSI6ImJvbGlkZWFpLjYyM2FlNzk2MjBkMmM0LjIyMjg1NjEwIiwic3ViIjoic3Vic2NyaWJlLXNlcnZpY2VzIiwiZXhwIjoxODA1NzkzOTQyLjEzMzY5MiwibmJmIjoxNjQ4MDI3NTQyLjEzMzY5MiwiaWF0IjoxNjQ4MDI3NTQyLjEzMzY5MiwidWlkIjoxLCJhY3QiOiJzaHBhdF84N2FmMGEyOTQ3ZTYwMTY5MmEyNDYxZWU2NDJkYzVmZiJ9.AEjGeYymx0fEmMpAJ2laEJRQoQzSf6_bEUPOeIN0Hhs"
            }
            }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            
        })
    })  
})