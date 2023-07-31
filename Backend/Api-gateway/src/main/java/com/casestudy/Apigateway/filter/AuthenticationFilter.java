package com.casestudy.Apigateway.filter;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.stereotype.Component;

import com.casestudy.Apigateway.util.JwtUtil;
import com.google.common.net.HttpHeaders;

@Component
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {

    @Autowired
    private RouteValidator validator;

    @Autowired
    private JwtUtil util;

    public static class Config {

    }

    public AuthenticationFilter() {
        super(Config.class);
    }

    public AuthenticationFilter(Class<Config> configClass) {
        super(configClass);
    }

    @Override
    public GatewayFilter apply(Config config) {
        return ((exchange, chain) -> {
            if (validator.isSecured.test(exchange.getRequest())) {
                if (!exchange.getRequest().getHeaders().containsKey(HttpHeaders.AUTHORIZATION)) {
                    throw new RuntimeException("Missing authorization header");
                }

                String authHeader = exchange.getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION).get(0);
                if (authHeader != null && authHeader.startsWith("Bearer ")) {
                    authHeader = authHeader.substring(7);
                }

                try {
                    // Validate token and extract user roles from the token
                    System.out.println("Step1");
                    String roles = util.extractRolesFromToken(authHeader);
                    System.out.println("step5");
                    String requestedPath = exchange.getRequest().getPath().toString();
                    boolean authorized = false;

                    // Perform role-based authorization logic
                    if (requestedPath.startsWith("/admin")) {
                        authorized = roles.equalsIgnoreCase("ROLE_ADMIN");
                    } else if (requestedPath.startsWith("/ticket")) {
                        authorized = roles.equalsIgnoreCase("ROLE_USER");
                    }

                    if (!authorized) {
                        throw new RuntimeException("Unauthorized access to the application123");
                    }

                } catch (Exception e) {
                	System.err.println("Exception during authorization: " + e.getMessage());
                    throw new RuntimeException("Unauthorized access to the application");
                }
            }
            return chain.filter(exchange);
        });
    }
}
