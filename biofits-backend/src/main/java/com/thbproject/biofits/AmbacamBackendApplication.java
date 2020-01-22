package com.thbproject.biofits;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.thbproject.biofits.model.AutorizationBenutzer;
import com.thbproject.biofits.repository.BenutzerRepository;

@SpringBootApplication
public class AmbacamBackendApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(AmbacamBackendApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(AmbacamBackendApplication.class, args);
    }

    @Autowired
    public void authenticationManager(AuthenticationManagerBuilder builder, BenutzerRepository repository)
            throws Exception {

        builder.userDetailsService(new UserDetailsService() {

            @Override
            public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
                return new AutorizationBenutzer(repository.findOneByEmail(email));
            }
        });
    }
}
