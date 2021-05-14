package com.PAF;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map; 
import java.util.Scanner;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import com.PAF.Cart;

/**
 * Servlet implementation class ItemsAPI
 */
@WebServlet("/CartAPI")
public class CartAPI extends HttpServlet {
	
	private static final long serialVersionUID = 1L;

	Cart cartObj = new Cart();
	
	/**
	 * @see HttpServlet#HttpServlet()
	 */

	public CartAPI() 
	{
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		//Not used
	}
	
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException 
	{ 
		String output = cartObj.insertCart(request.getParameter("prodCode"), 
				request.getParameter("prodName"), 
				request.getParameter("prodPrice"), 
				request.getParameter("quantity"), 
				request.getParameter("CusAddress"), 
				request.getParameter("CusContact"), 
				request.getParameter("CusEmail")); 
		response.getWriter().write(output); 
	}
	
	
	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException 
	{ 
		Map paras = getParasMap(request); 
		String output = cartObj.updateCart(paras.get("hidCartIDSave").toString(), 
				paras.get("prodCode").toString(), 
				paras.get("prodName").toString(), 
				paras.get("quantity").toString(),
				paras.get("CusAddress").toString(),
				paras.get("CusContact").toString(),
				paras.get("CusEmail").toString()); 
		response.getWriter().write(output); 
	} 
	
	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException 
	{ 
		Map paras = getParasMap(request); 
		String output = cartObj.deleteCart(paras.get("id").toString()); 
		response.getWriter().write(output); 
	}
	
	//Convert request parameters to a Map
	private static Map getParasMap(HttpServletRequest request) 
	{ 
		Map<String, String> map = new HashMap<String, String>(); 
		try
		{ 
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8"); 
			String queryString = scanner.hasNext() ? 
					scanner.useDelimiter("\\A").next() : ""; 
			scanner.close(); 
			
			String[] params = queryString.split("&"); 
			for (String param : params) 
			{ 
			String[] p = param.split("=");
			map.put(p[0], p[1]); 
			} 
		} 
		catch (Exception e) 
		{ 
		} 
		return map; 
	}


}