package com.example.houserenting.repository;

import com.example.houserenting.model.House;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface HouseRepository extends JpaRepository<House,Long> {

    Iterable<House>findAllByNameContaining(String name);

    Iterable<House>findAllByPriceBetween(int from, int to);

    @Query(value = "select *from house join category c on house.id_category_id = c.id\n" +
            "where id_category_id = ?",nativeQuery = true)
    Iterable<House> findAllByIdCategory(@Param("id") Long id );

    @Query (value = "select * from houserenting.house " +
            "where name like ? or (price between ? and ?)",nativeQuery = true )
    Iterable<House> findAllByNameContainingAndPriceBetween(@Param("name") String name,@Param("from") int from,@Param("to") int to);


    Iterable<House> findAllByAddressContaining(String address);

    @Query (value = "select *\n" +
            "from house join user_role r on house.id_user_owner_id = r.role_id\n" +
            "            join user_table us on us.id = r.user_id\n" +
            "where user_id =?",nativeQuery = true )
    Iterable<House> findAllByIdUserOwner(@Param("id") Long id);








    

}
