/**
 * 
 */
package com.nikpetrovic.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dropbox.core.DbxException;
import com.dropbox.core.DbxRequestConfig;
import com.dropbox.core.v2.DbxClientV2;
import com.dropbox.core.v2.users.FullAccount;

/**
 * @author Nikola.Petrovic
 * @created Aug 1, 2016
 */

@RestController
@RequestMapping("/dropbox")
public class DropboxController {
    private static final String ACCESS_TOKEN = "ff30tIMb4FEAAAAAAAACtLFcp-ADUyoTlqunIFlD2IvVZGNgz1DNZnUFhl6s1IFH";
    
    @RequestMapping("")
    public String hello() throws DbxException {
        DbxRequestConfig config = new DbxRequestConfig("ultimate-app/0.0.1");
        DbxClientV2 client = new DbxClientV2(config, ACCESS_TOKEN);
        
        FullAccount account = client.users().getCurrentAccount();
        
        return String.format("Current Account: %s", account.getName().getDisplayName());
    }
}