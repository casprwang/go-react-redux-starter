package server

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Index(c *gin.Context) {
	c.HTML(http.StatusOK, "index.tmpl", gin.H{
		"title": "Main website",
	})
}

func (server *Server) RegisterRoutes() {
	indexRoutes := server.Engine.Group("/")
	{
		indexRoutes.GET("/", Index)
	}

}
